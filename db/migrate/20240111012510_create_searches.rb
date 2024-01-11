class CreateSearches < ActiveRecord::Migration[6.0]
  def change
    create_table :searches do |t|
      t.string :ip_address, null: false
      t.references :article, null: false, foreign_key: true

      t.timestamps
    end
  end
end
