import json

# read file
with open('apple_health_data.json', 'r') as myfile:
    data=myfile.read()

# parse file
obj = json.loads(data)

user_info = obj['HealthData']['Me']
dob = user_info["_HKCharacteristicTypeIdentifierDateOfBirth"]
sex = user_info["_HKCharacteristicTypeIdentifierBiologicalSex"]
if sex == "HKBiologicalSexFemale":
	sex = "Female"
elif sex == HKBiologicalSexMale:
	sex = "Male"

record = obj['HealthData']['Record']
height = 0
weight = 0
mult = 0
daily_steps = {}

for r in record:
	if r['_type'] == "HKQuantityTypeIdentifierStepCount":
		date = r['_startDate'].split()[0]

		if date.split("-")[0] =="2020":
			if date not in daily_steps:
				daily_steps[date] = {}
				daily_steps[date]["date"] = date
				daily_steps[date]["steps"] = 0
				daily_steps[date]["burned"] = 0
			daily_steps[date]["steps"] += int(r['_value'])
			daily_steps[date]["burned"] = mult* (daily_steps[date]['steps'])

	elif r['_type'] == "HKQuantityTypeIdentifierBodyMass":
		weight = float(r['_value'])
		mult = (weight*.57)/2200
		print(mult)

	elif r['_type'] == "HKQuantityTypeIdentifierHeight":
		height = float(r['_value'])

dates_list = []

for v in daily_steps.values():
	dates_list.append(v)


bmi = (weight*703)/(height**2)

json_data = {}
json_data['dob'] = dob
json_data['sex'] = sex
json_data['height'] = height
json_data['weight'] = weight
json_data['bmi'] = bmi
json_data['daily_steps'] = dates_list



with open('healthdata.json', 'w') as outfile:
    json.dump(json_data, outfile)

# show values
#print(str(obj['HealthData']['ExportDate']))
