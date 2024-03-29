"""
    나를 팔로우 하지만 내가 팔로잉 하지 않는 계정들
"""
import json

following_path = 'following.json'
follower_path = 'followers.json';
with open(follower_path, 'r') as fp:
    data = json.load(fp)

# check the following list first
tracklist = []
for item in data:
     for profile_info in item['string_list_data']:
            tracklist.append(json.dumps(profile_info['value']));


with open(following_path, 'r') as fp:
    data = json.load(fp)
    


for relationship in data['relationships_following']:
        for profile_info in relationship['string_list_data']:
            if json.dumps(profile_info['value']) in tracklist:
                tracklist.remove(json.dumps(profile_info['value']))
        # print(json.dumps(profile_info['value'], indent=4));
file_name = "unfollowingtrack.txt"
with open(file_name, 'w') as file:
    for data in tracklist:
        file.write(data + '\n')

print('done')


