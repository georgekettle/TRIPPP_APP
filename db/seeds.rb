photos = [
  'https://i.pinimg.com/564x/d8/68/ce/d868ce27acd05074251cfdaf7b435c67.jpg',
  'https://i.pinimg.com/564x/6a/65/27/6a6527f3a66e8b44a39468affc97b632.jpg',
  'https://i.pinimg.com/originals/f1/f5/8d/f1f58d0c3d5f15b4b692f981bb1936eb.jpg',
  'https://i.pinimg.com/originals/72/6b/3d/726b3d01be3232a87e6f28cda97bb8cd.jpg',
  'https://1.bp.blogspot.com/-Dxty4wI0PH8/W4BI0HUW3mI/AAAAAAAAbTw/ul8qJWvp1HkW5MEPddpi6KZ6KzOxbNgYwCLcBGAs/s1600/2018-08-24_0002.jpg',
  'https://1.bp.blogspot.com/-y5Gsv6IKWXw/W37h63eMmuI/AAAAAAAAbR8/KO6VFBue9IEbkbkaC8vEQ2_BPJYxySq3gCLcBGAs/s1600/2018-08-23_0007.jpg',
  'https://4.bp.blogspot.com/-WmuWQHav76I/W38Yma3DFBI/AAAAAAAAbTc/7pJZiCJ1ZQkHNPZwJjV1CwVYdi62FVrewCLcBGAs/s1600/2018-08-23_0023.jpg',
  'https://i.pinimg.com/564x/25/ff/b7/25ffb725b427180527ece3e4b268a0c1.jpg',
  'https://4.bp.blogspot.com/-9-gSiciy8vY/W4BI0VsXw0I/AAAAAAAAbT0/1UD-Whz6ckk9dwWO72CIzuwT7ue6G9n0gCLcBGAs/s1600/2018-08-24_0004.jpg',
  'https://2.bp.blogspot.com/-RryfmPScOVM/W4BI1urY-yI/AAAAAAAAbUQ/r2E58VDVKXAEpI-RflPYsiElNSHhfJKjgCLcBGAs/s1600/2018-08-24_0011.jpg',
  'https://i.pinimg.com/564x/50/c5/cc/50c5cc1317a87cd447dff87caba7e9af.jpg',
  'https://3.bp.blogspot.com/-o_TWQUVsNIY/W4BI11WVqnI/AAAAAAAAbUY/MAoaarvK4YoLZs3yMN718hTVhRpe3PGbwCLcBGAs/s1600/2018-08-24_0013.jpg',
  'https://2.bp.blogspot.com/-ugEN91Q1VcI/W37h--9UU3I/AAAAAAAAbS4/r2JGE6hht7A-9IS6mMWeVh116Zc-s8VygCLcBGAs/s1600/2018-08-23_0022.jpg',
  'https://1.bp.blogspot.com/-JR8TMaK6pcc/W37h7sm-TeI/AAAAAAAAbSI/NiyNMJEx3vshBvIItx3gq4eXpED4NSYYgCLcBGAs/s1600/2018-08-23_0010.jpg'
]

captions = [
  'There is nothing more magical than the Italian coast',
  'This trip we were based in Positano',
  'Day trip to Capri',
  'Cole and I had a lovely morning in Positano',
  'Alongside the "faraglioni"',
  'Da Luigi is right next to another beach club',
  'Some much needed R&R',
  'Boat ride around the entire island of Capri',
  'Something fun and surprising in Capri was the amount of designer shopping',
  'Long story short, put Capri on the top of your list',
  'Such fun walk with some stunning views throughout the city',
  'Towering rock formations created by wave erosion',
  'Peak of summer',
  'A week in paradise with my husband'
]

user_photo = "https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net"

trips = [
  'A Day in Capri',
  'Italian Boating'
]

destinations = [
  'ChIJ7YKG_u8pQAwRPK9LyPFLGrA'
]

description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Destination.create(g_places_id: destinations[0])

User.create(email: 'george.kettle@icloud.com', password: '1234567', user_name: 'tessa_amberly', photo: user_photo)

trips.each do |trip|
  Trip.create(title: trip, user_id: 1)
end

photos.each_with_index do |photo, index|
  new_photo = Photo.create(img_url: photo)
  Pin.create(photo_id: new_photo.id, url: photo, user_id: 1, trip_id: rand(1..2), destination_id: 1, title: captions[index], caption: description)
end
