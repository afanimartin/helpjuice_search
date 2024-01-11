class RemoveArticleIdFromSearches < ActiveRecord::Migration[6.0]
  def change
    remove_column :searches, :article_id, :string
  end
end
