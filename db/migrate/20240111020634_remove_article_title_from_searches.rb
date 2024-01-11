class RemoveArticleTitleFromSearches < ActiveRecord::Migration[6.0]
  def change
    remove_column :searches, :article_title, :string
  end
end
