class AddQueryToSearches < ActiveRecord::Migration[6.0]
  def change
    add_column :searches, :query, :string
  end
end
