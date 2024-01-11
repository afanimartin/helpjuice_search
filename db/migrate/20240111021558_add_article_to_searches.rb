class AddArticleToSearches < ActiveRecord::Migration[6.0]
  def change
    add_reference :searches, :article, null: false, foreign_key: true
  end
end
