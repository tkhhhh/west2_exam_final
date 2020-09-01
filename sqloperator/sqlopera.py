import pymysql
import json
import string
import hashlib
import re
import time
import jwt
import math

class operasql(object):
    def __init__(self):
        self.conn = pymysql.connect(host='localhost',user='root',password='Fxn03166',db='helper',charset='utf8')
    def login_in(self,password,username,name,id,phonenumber,role,email):
        #加入学校认证信息
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select * from user where idd='%s'" %(id)
        curse.execute(sql)
        result = curse.fetchall()
        if result:
            return 201
        curse.close()
        curse = self.conn.cursor()
        sql = "insert into helper.user (usename, password, idd, name, phonenumber,role,email) VALUE ('%s','%s','%s','%s'" \
              ",'%s','%s','%s')"  % (usename, password, id, name, phonenumber,role,email)
        curse.execute(sql)
        self.conn.commit()
        curse.close()
        self.conn.close()
        return 200
    def login_up(self,password,email):
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select usename from user where password='%s' and email='%s'" % (password,email)
        curse.execute(sql)
        result = curse.fetchone()
        if result:
            username = result[0]
            login_time = time.time()
            payload = {
                "username":username,
                "status":200,
                "time":login_time
            }
            token = jwt.encode(payload,"secret",algorithm="HS256")
            return {
                "status": 200,
                "username": username,
                "token": token.decode("utf-8")
            }
        else:
            return {
                "status":201,
                "username":"none",
                "token":"none"
            }
    def verify_token(self,token):
        data = jwt.decode(token,"secret",algorithms="HS256")
        stime = data["time"]
        ntime = time.time()
        if math.fabs(stime-ntime) > 3600:
            return {
                "status":203,
                "token":""
            }
        if data:
            return {
                "status":200,
                "token":token.decode("utf-8")
            }
        else:
            return {
                "status":203,
                "token":""
            }
    def verify_token_default(self,token):
        data = jwt.decode(token,"secret",algorithms="HS256")
        stime = data["time"]
        ntime = time.time()
        if math.fabs(stime-ntime) > 3600:
            return {
                "status":203,
                "token":""
            }
        if data:
            return token
        else:
            return {
                "status":203,
                "token":""
            }
    def get_token_username(self,token):
        data = jwt.decode(token,"secret",algorithms="HS256")
        username = data["username"]
        return username
    def search_helper(self,role):
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select usename,idd from user where role='%s'" % (role)
        curse.execute(sql)
        result = curse.fetchall()
        curse.close()
        self.conn.close()
        return result
    def publish_artical(self,username,text,type):
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        time_t = time.time()
        sql = "insert into title (type, message, time_t, username) value ('%s','%s','%s','%s')" %\
              (type,text,str(time_t),username)
        curse.execute(sql)
        self.conn.commit()
        curse.close()
        self.conn.close()
        return 200
    def search_artical(self,type):
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select * from title where type='%s'" % (type)
        curse.execute(sql)
        result = curse.fetchall()
        curse.close()
        self.conn.close()
        return result
    def show_order(self,token):
        username = self.get_token_username(token=token)
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select username_helper,project,status from order_data where username_user='%s'" % (username)
        curse.execute(sql)
        result = curse.fetchmany(5)
        curse.close()
        self.conn.close()
        return result
    def insert_order(self,token,username_helper,project,status):
        username = self.get_token_username(token=token)
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "insert into order_data (username_user,username_helper,project,status) value ('%s','%s','%s','%s')" \
              % (username,username_helper,project,status)
        curse.execute(sql)
        self.conn.commit()
        curse.close()
        self.conn.close()
        return 200
    def determine_order(self,username):
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select phonenumber from user where usename='%s'" % (username)
        curse.execute(sql)
        result = curse.fetchone()
        curse.close()
        self.conn.close()
        return result
    def get_role(self,username):
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select role from user where usename='%s'" % (username)
        curse.execute(sql)
        result = curse.fetchone()
        curse.close()
        self.conn.close()
        return result[0]
    def get_order(self,token):
        username = self.get_token_username(token=token)
        role = self.get_role(username=username)
        self.conn.ping(reconnect=False)
        curse = self.conn.cursor()
        sql = "select status,project from order_data where project='%s'" % (role)
        curse.execute(sql)
        result = curse.fetchmany(6)
        curse.close()
        self.conn.close()
        return result


if __name__ == '__main__':
    a = operasql()
    print(a.get_role('ghydebaba'))


