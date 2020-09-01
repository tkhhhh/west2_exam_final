import requests
import json

class apiuser():
    def __init__(self,ak="BNovYIDo6STCIWXdiYeofalx9xA3YrTA"):
        self.ak = ak
    def reminder(self,query):
        url = "http://api.map.baidu.com/place/v2/suggestion?query=" + query + "&region=福州&city_limit=true&output=json&ak=" + self.ak
        req = requests.get(url=url)
        result = json.loads(req.text)
        return result
    def code_address(self,address):
        ak = "BNovYIDo6STCIWXdiYeofalx9xA3YrTA"
        url = "http://api.map.baidu.com/geocoder/v2/?address=" + address + "&output=json&ak=" + self.ak
        req = requests.get(url=url)
        result = json.loads(req.text)
        lng = round(result['result']['location']['lng'],6)
        lat = round(result['result']['location']['lat'],6)
        key = str(lat) +","+ str(lng)
        return key
    def string_to_float(self,string):
        string = str(string)
        stringson = string.split('.')
        result = str(stringson[0]) + "." + str(stringson[1][0:6])
        return result
    def route_plan_default(self,lng,lat,destination,way):
        lng = self.string_to_float(lng)
        lat = self.string_to_float(lat)
        origin = lat + "," + lng
        des = self.reminder(destination)
        destination = des["result"][0]["name"]
        destination = self.code_address(destination)
        ak = "BNovYIDo6STCIWXdiYeofalx9xA3YrTA"
        url = "http://api.map.baidu.com/directionlite/v1/" + way + "?origin=" + origin + "&destination=" + destination + "&ak=" + self.ak
        req = requests.get(url=url)
        result = json.loads(req.text)
        return result
    def route_plan(self,origin,destination,way):
        ori = self.reminder(origin)
        des = self.reminder(destination)
        origin = ori["result"][0]["name"]
        destination = des["result"][0]["name"]
        origin = self.code_address(origin)
        destination = self.code_address(destination)
        ak = "BNovYIDo6STCIWXdiYeofalx9xA3YrTA"
        url = "http://api.map.baidu.com/directionlite/v1/" + way + "?origin=" + origin + "&destination=" + destination + "&ak=" + self.ak
        req = requests.get(url=url)
        result = json.loads(req.text)
        return result
    def place_search(self,place,lng,lat):
        ak = "BNovYIDo6STCIWXdiYeofalx9xA3YrTA"
        lng = self.string_to_float(lng)
        lat = self.string_to_float(lat)
        address = str(lat) + "," + str(lng)
        url = "http://api.map.baidu.com/place/v2/search?query=" + place +"&location=" + address + "&radius=4000&output=json&ak=" + self.ak
        req = requests.get(url=url)
        result = json.loads(req.text)
        return result
if __name__ == "__main__":
    a = apiuser()
    print(a.place_search("福州大学",lat="26.064330954797",lng="119.19834720562"))