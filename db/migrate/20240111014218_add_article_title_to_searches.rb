class AddArticleTitleToSearches < ActiveRecord::Migration[6.0]
  def change
    add_column :searches, :article_title, :string
  end
end
