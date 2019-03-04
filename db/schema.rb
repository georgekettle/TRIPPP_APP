# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_04_000830) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "destinations", force: :cascade do |t|
    t.string "g_places_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
  end

  create_table "photos", force: :cascade do |t|
    t.text "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pins", force: :cascade do |t|
    t.bigint "photo_id"
    t.bigint "user_id"
    t.bigint "trip_id"
    t.bigint "destination_id"
    t.text "caption"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "title"
    t.text "url"
    t.index ["destination_id"], name: "index_pins_on_destination_id"
    t.index ["photo_id"], name: "index_pins_on_photo_id"
    t.index ["trip_id"], name: "index_pins_on_trip_id"
    t.index ["user_id"], name: "index_pins_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_name"
    t.string "photo"
    t.text "description"
    t.bigint "photo_id"
    t.text "profile_url"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["photo_id"], name: "index_users_on_photo_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "pins", "destinations"
  add_foreign_key "pins", "photos"
  add_foreign_key "pins", "trips"
  add_foreign_key "pins", "users"
  add_foreign_key "trips", "users"
  add_foreign_key "users", "photos"
end
