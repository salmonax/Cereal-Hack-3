class ChangeStoryToText < ActiveRecord::Migration
  def change
    change_table :geostories do |t|
      t.rename :story, :text
    end
  end
end
