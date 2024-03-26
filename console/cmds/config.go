package cmds

import (
	"fmt"

	"github.com/localhostjason/webserver/db"
	"github.com/localhostjason/webserver/server/config"
	"github.com/sirupsen/logrus"
)

func DumpDefaultConfig() {
	content, err := config.GeneDefaultConfig()
	if err != nil {
		fmt.Println("failed to generate default config")
	} else {
		fmt.Println(string(content))
	}
}

func SyncDB() (err error) {
	if !db.DBEnable() {
		logrus.Info("no enable sql")
		return
	}
	err = db.Connect()
	if err != nil {
		return fmt.Errorf("failed to migrate: %w", err)
	}
	err = db.Migrate()
	if err != nil {
		return
	}

	err = db.InitData()
	return
}

func AutoMigrate() (err error) {
	if !db.DBEnable() {
		return
	}
	err = db.Connect()
	if err != nil {
		return fmt.Errorf("failed to migrate: %w", err)
	}
	return db.Migrate()
}

// func CreatePem() error {
// 	rsa := service.NewRsa()
// 	return rsa.GenRsaKey(2048)
// }
