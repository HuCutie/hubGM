package cmds

import (
	"fmt"

	"github.com/localhostjason/webserver/svc"

	log "github.com/sirupsen/logrus"
)

func createService(singleMode bool) (*svc.Svc, error) {
	prc := NewProc(singleMode)
	svcx, err := NewService(prc)
	if err != nil {
		return nil, fmt.Errorf("failed to create program: %w", err)
	}
	return svcx, nil
}

func RunService(singleMode bool, cmd string) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println(r)
		}
	}()

	s, err := createService(true)
	if err != nil {
		log.Fatalln("failed to start", err)
	}

	s.RunMain(singleMode, cmd)
}
