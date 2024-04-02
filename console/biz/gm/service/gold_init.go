package service

import (
	"bufio"
	"console/biz/gm/model"
	"console/mods/game_db"
	"console/mods/pathx"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"

	"github.com/localhostjason/webserver/util"
)

type GoldFile struct {
	File string
}

func NewGoldFile() *GoldFile {
	return &GoldFile{
		File: getGoldFile(),
	}
}

func getGoldFile() string {
	exeDir, _ := pathx.GetExeDir()
	goldFile := filepath.Join(exeDir, "source", "gold.txt")
	if !util.PathExists(goldFile) {
		return ""
	}
	return goldFile
}

func (gf *GoldFile) Read() []model.Gold {
	fs, err := os.Open(gf.File)
	if err != nil {
		return nil
	}

	goldList := make([]model.Gold, 0)
	line := bufio.NewReader(fs)
	for {
		content, _, err := line.ReadLine()
		if err == io.EOF {
			fs.Close()
			break
		}

		data := string(content)
		reg, _ := regexp.Compile(`\[(.*)]`)
		ver := reg.FindAllStringSubmatch(data, 1)
		if len(ver) == 0 {
			continue
		}
		code, err := strconv.Atoi(strings.TrimSpace(ver[0][1]))
		if err != nil {
			continue
		}

		reg2, _ := regexp.Compile(".*name:(.*)")
		d := reg2.FindAllStringSubmatch(data, 1)
		name := strings.TrimSpace(d[0][1])

		goldList = append(goldList, model.Gold{
			Code: code,
			Name: name,
		})
	}

	return goldList
}

func (gf *GoldFile) WriteDB() error {
	data := gf.Read()
	dbx := game_db.DBPools.Get(model.TaiwanCain2nd)

	var gs []model.Gold
	dbx.Find(&gs)
	if len(gs) > 0 {
		fmt.Println("Clearing existing gold data...")
		dbx.Exec("DELETE FROM golds")
	}

	fmt.Println("start")
	dbx.Where("1=1").Delete(&model.Gold{})
	dbx.CreateInBatches(&data, 10000)
	fmt.Println("stop")
	return nil
}

func init() {
	gf := NewGoldFile()
	game_db.AddInitHook(gf.WriteDB)
}
