class AddSearchCountToArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :search_count, :integer
  end
end
