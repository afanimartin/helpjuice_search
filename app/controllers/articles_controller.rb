class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show ]

  def index
    @articles = Article.all.order(:updated_at => :desc)
  end

  def show  
  end

  private
  def set_article
    @article = Article.find_by(title: params[:title])
    if @article.nil?
      puts "Article not found for title: #{params[:title]}"
    end
  end
end
