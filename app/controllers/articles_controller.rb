class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show ]

  def index
    @articles = Article.all.order(:updated_at => :desc)
  end

  def show
  end

  private
  def set_article
    @article = Article.find(params[:id])
  end
end
