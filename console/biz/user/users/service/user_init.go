package service

import (
	"console/biz/user/users/model"
	"time"

	"github.com/localhostjason/webserver/db"
	uuid "github.com/satori/go.uuid"
)

const (
	Normal = 1
	Locked = -1
)

const (
	ADMIN    = "admin"
	SECURITY = "security"
	AUDITOR  = "auditor"
)

const _defaultPassword = "1341454644"

func InitUser() error {
	now := time.Now()
	users := []model.User{
		{
			Username:     "hucutie",
			Role:         ADMIN,
			Email:        "",
			Desc:         "超级管理员",
			Time:         now,
			IsSuperAdmin: true,
		},
	}

	for i := range users {
		u := &users[i]

		var userList []model.User
		if db.DB.Limit(1).Where("username = ? ", u.Username).Find(&userList); len(userList) == 0 {
			u.SetPassword(_defaultPassword)
			u.JwtKey = uuid.NewV4()
			db.DB.Create(u)
		}
	}
	return nil
}

func init() {
	db.AddInitHook(InitUser)
}
