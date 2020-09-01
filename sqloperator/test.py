import pymysql
import string
import hashlib
import re
import time
from werkzeug.security import generate_password_hash,check_password_hash
import jwt
import math

class database_operator():
    def __init__(self,host='localhost',port=3306,user='root',password='Fxn03166',charset='utf8',db='user'):
        self.conn = pymysql.connect(host=host,port=port,user=user,password=password,charset=charset,db=db)
    def create_user(self,username,password,account):
        curse = self.conn.cursor()
        self.conn.ping(reconnect=True)
        sql = "select hashpassword from `user` where account='%s'" % (account)
        curse.execute(sql)
        result = curse.fetchall()
        if result :
            return {
                "status":201
            }
        hashpassword = generate_password_hash(password=password)
        curse.close()
        self.conn.close()
        curse_1 = self.conn.cursor()
        self.conn.ping(reconnect=True)
        sql = "insert into `user` (username,hashpassword,account) values ('%s','%s','%s')" %(username,hashpassword,account)
        curse_1.execute(sql)
        self.conn.commit()
        curse_1.close()
        self.conn.close()
        return {
            "status":200
        }
    def verify_user(self,account,password):
        curse = self.conn.cursor()
        self.conn.ping(reconnect=True)
        sql = "select hashpassword,username from user.user where account='%s'" % (account)
        curse.execute(sql)
        result = curse.fetchall()
        if result:
            key = result[0][0]
            if check_password_hash(key,password):
                login_time = time.time()
                username = result[0][1]
                payload = {
                    "status":200,
                    "account":account,
                    "time":login_time
                }
                token = str(jwt).encode(payload,"secret",algorithm="HS256")
                return {
                    "status":200,
                    "username":username,
                    "token":token.decode("utf-8")
                }
            else:
                return {
                    "status": 203,
                    "username": "",
                    "token": ""
                }
        else:
            return {
                "status":203,
                "username":"",
                "token":""
            }
    def verify_token(self,token):
        data = jwt.decode(token,"secret",algorithms="HS256")
        stime = data["time"]
        ntime = time.time()
        if math.fabs(stime-ntime) > 3600:
            return {
                "status":204,
                "token":""
            }
        if data:
            return {
                "status":200,
                "token":token.decode("utf-8")
            }
        else:
            return {
                "status":204,
                "token":""
            }
    def verify_token_defult(self,token):
        data = jwt.decode(token,"secret",algorithms="HS256")
        stime = data["time"]
        ntime = time.time()
        if math.fabs(stime-ntime) > 3600:
            return {
                "status":204,
                "token":""
            }
        if data:
            return {
                "status":200,
                "token":token
            }
        else:
            return {
                "status":204,
                "token":""
            }
    def get_token_username(self,token):
        account = self.get_token_account(token=token)
        curse = self.conn.cursor()
        self.conn.ping(reconnect=True)
        sql = "select username from `user` where account='%s'" % (account)
        curse.execute(sql)
        result = curse.fetchall()
        return result[0][0]

    def get_token_account(self,token):
        data = jwt.decode(token,"secret",algorithms="HS256")
        account = data["account"]
        return account

    def store_line(self,origin,destination,duration,distance,account):
        curse = self.conn.cursor()
        self.conn.ping(reconnect=True)
        sql = "select distance from storeline where origin='%s' and destination='%s' and account='%s'" % (origin,destination,account)
        curse.execute(sql)
        result = curse.fetchall()
        curse.close()
        self.conn.close()
        if result:
            return {
                "message": "已收藏该路线",
                "status": 200
            }
        else:
            curse_1 = self.conn.cursor()
            self.conn.ping(reconnect=True)
            sql = "insert into storeline (account,origin,destination,duration,distance) values ('%s','%s','%s','%s','%s')" % (account,origin,destination,duration,distance)
            curse_1.execute(sql)
            self.conn.commit()
            curse_1.close()
            self.conn.close()
            return {
                "message":"收藏成功",
                "status":200
            }
    def get_history(self,account):
        curse = self.conn.cursor()
        self.conn.ping(reconnect=True)
        sql = "select destination from storeline where account='%s'" % (account)
        curse.execute(sql)
        result = curse.fetchall()
        curse.close()
        self.conn.close()
        data = result[-3:]
        return data
    def get_store(self,account):
        curse = self.conn.cursor()
        self.conn.ping(reconnect=True)
        sql = "select origin,destination,distance,duration from storeline where account='%s'" % (account)
        curse.execute(sql)
        result = curse.fetchall()
        curse.close()
        self.conn.close()
        return result




if __name__ == "__main__":
    s = database_operator()
    print(s.get_username("1234@q.com"))