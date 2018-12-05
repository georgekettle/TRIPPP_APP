photos = [
  'https://notanomadblog.com/images/travel/tenerife/las-teresitas-portrait.jpg',
  'https://notanomadblog.com/images/travel/tenerife/santa-cruz.jpg',
  'https://notanomadblog.com/images/travel/tenerife/las-teresitas-view.jpg',
  'https://notanomadblog.com/images/travel/tenerife/tapas-bar-food.jpg',
  'https://notanomadblog.com/images/travel/tenerife/anaga-hike.jpg',
  'https://notanomadblog.com/images/travel/tenerife/benijo-hike.jpg',
  'https://notanomadblog.com/images/travel/tenerife/restaurante-el-mirador-benijo.jpg',
  'https://notanomadblog.com/images/travel/tenerife/las-carboneras.jpg',
  'https://notanomadblog.com/images/travel/tenerife/la-orotava-botanical-garden-back-2.jpg',
  'https://notanomadblog.com/images/travel/tenerife/casa-de-los-balcones.jpg',
  'https://notanomadblog.com/images/travel/tenerife/punta-de-teno-2.jpg',
  'https://notanomadblog.com/images/travel/tenerife/masca.jpg',
  'https://notanomadblog.com/images/travel/tenerife/los-cristianos-beach.jpg',
  'https://notanomadblog.com/images/travel/tenerife/los-gigantes.jpg'
]

captions = [
  'There are a few main “party cities” in the Southwest of Tenerife',
  'day on the beach in Los Cristianos',
  'stunning canyons surrounding Masca',
  'one of Tenerife’s must-see villages',
  'the most western point in Tenerife',
  'the staple Spanish-style church',
  'the oldest tree on Tenerife',
  'Did you know that the wines of Tenerife were once some of the most sought after in Europe?',
  'Porto de la Cruz has a lovely stretch along the sea',
  'Puerto de la Cruz is a cute, beachfront city',
  'There are a lot of small villages in this area',
  'In the distance you can see Taganana',
  'El Teide is Spain’s highest mountain and volcano',
  'Parque Natural de Anaga'
]

trips = [
  'Beaches in Tenerife',
  'Photographers guide to Tenerife'
]

destinations = [
  'ChIJ7YKG_u8pQAwRPK9LyPFLGrA'
]

Destination.create(g_places_id: destinations[0])

User.create(email: 'george.kettle@icloud.com', password: '1234567', user_name: 'george')

trips.each do |trip|
  Trip.create(title: trip, user_id: 1)
end

photos.each_with_index do |photo, index|
  new_photo = Photo.create(img_url: photo)
  Pin.create(photo_id: new_photo.id, user_id: 1, trip_id: rand(1..2), destination_id: 1, caption: captions[index])
end
