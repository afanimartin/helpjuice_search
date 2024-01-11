module ArticlesHelper
  def formatted_article(title)
    formatted_title = title.tr('-', ' ')
    formatted_article = Article.find_by(title: formatted_title)

    formatted_article
  end
end
