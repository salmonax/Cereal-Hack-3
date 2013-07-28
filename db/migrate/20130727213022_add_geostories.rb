class AddGeostories < ActiveRecord::Migration
  def change
    create_table :geostories do |t|
      t.string :title 
      t.string :author
      t.text :text
      t.integer :duration
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
