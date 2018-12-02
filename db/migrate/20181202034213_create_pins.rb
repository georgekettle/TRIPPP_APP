class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.references :photo, foreign_key: true
      t.references :user, foreign_key: true
      t.references :trip, foreign_key: true
      t.references :destination, foreign_key: true
      t.text :caption

      t.timestamps
    end
  end
end
