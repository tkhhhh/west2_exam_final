from flask import Flask,render_template,request,jsonify
from sqloperator.sqlopera import operasql
import json
import requests

app = Flask(__name__,static_url_path="")
data = operasql()

s = ['办公软件','功能软件','手机软件','电子硬件','电脑检修','手机检修', '电器清洗','室内保洁',
     '室外保洁', '保姆家教','水管类维修','电路类维修', '搬家','搬动']

@app.route("/")
def index():
    return app.send_static_file("index.html")
@app.route("/user",methods=["GET","POST"])
def user():
    para = request.args
    req = para.get("response")
    if req == "token":
        token = para.get("token")
        if token:
            return jsonify(
                {
                    "username":data.get_token_username(token=token),
                    "token":data.verify_token_default(token=token)
                }
            )
        else:
            return jsonify(
                {
                    "token":""
                }
            )
    if req == "register":
        id = para.get("id")
        password = para.get("password")
        username = para.get("username")
        name = para.get("name")
        number = para.get("number")
        email = para.get("email")
        return jsonify(data.login_in(username=username,id=id,password=password,name=name,phonenumber=number,email=email))
    if req == "hot":
        token = para.get("token")
        if data.verify_token(token=token)["status"] != 200:
            return jsonify({"message":data.verify_token(token=token)})
        else:
            return jsonify(
                {
                    "token":data.verify_token_default(token=token),
                "message":[
                    {
                        "name": s[0],
                        "id": 0,
                        "price": 20
                    },
                    {
                        "name": s[1],
                        "id": 1,
                        "price": 5
                    },
                    {
                        "name": s[2],
                        "id": 2,
                        "price": 10
                    },
                    {
                        "name": s[3],
                        "id": 3,
                        "price": 20
                    },
                    {
                        "name": s[4],
                        "id": 4,
                        "price": 5
                    },
                    {
                        "name": s[5],
                        "id": 5,
                        "price": 10
                    },
                    {
                        "name": s[6],
                        "id": 6,
                        "price": 20
                    },
                    {
                        "name": s[7],
                        "id": 7,
                        "price": 5
                    }]
                })
    if req == "login":
        email = para.get("email")
        password = para.get("password")
        return jsonify(data.login_up(email=email,password=password))
    if req == "search_helper":
        token = para.get("token")
        if data.verify_token(token=token)["status"] != 200 :
            return jsonify({"message":data.verify_token(token=token)})
        else :
            name = para.get("name")
            return jsonify({"message":data.search_helper(role=name),
                            "name":name,
                            "price":5,
                            "id":s[name],
                           "token":data.verify_token_default(token=token)})
    if req == "upload":
        key = para.get("key")
        text = para.get("text")
        username = para.get("username")
        return jsonify(data.publish_artical(username=username,type=key,text=text))
    if req == "search_course":
        name = para.get("name")
        token = para.get("token")
        if data.verify_token(token=token)["status"] != 200:
            return jsonify({"message": data.verify_token(token=token)})
        else:
            return jsonify(data.search_artical(type=name))
    if req == "insert_order":
        token = para.get("token")
        if data.verify_token(token=token)["status"] != 200:
            return jsonify({"message": data.verify_token(token=token)})
        else:
            username_helper = para.get("username_helper")
            project = para.get("project")
            status = para.get("status")
            return jsonify({"message":data.insert_order(token=token,username_helper=username_helper,project=project,status=status),
                            "token":data.verify_token_default(token=token)})
    if req == "show_order":
        token = para.get("token")
        if data.verify_token(token=token)["status"] != 200:
            return jsonify({"message": data.verify_token(token=token)})
        else:
            return jsonify({
                "message":data.show_order(token=token),
                "token":data.verify_token_default(token=token)
            })
    if req == "determine_order":
        token = para.get("token")
        if data.verify_token(token=token)["status"] != 200:
            return jsonify({"message": data.verify_token(token=token)})
        else:
            username = para.get("username")
            return jsonify({
                "message":data.determine_order(username=username),
                "token":data.verify_token_default(token=token)
            })
    if req == "get_order":
        token = para.get("token")
        if data.verify_token(token=token)["status"] != 200:
            return jsonify({"message": data.verify_token(token=token)})
        else:
            return jsonify({"message":data.get_order(token=token),
                            "token":data.verify_token_default(token=token)})

if __name__ == "__main__":
    app.run()
