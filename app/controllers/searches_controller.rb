class SearchesController < ApplicationController
  def create
    @article = Article.find_or_create_by(title: params[:title])
    
    if @article
      @search = @article.searches.new(query: params[:title], ip_address: request.remote_ip)
      @article.increment!(:search_count)

      respond_to do |format|
        if @search.save
          format.html { redirect_to @article }
          format.json { render json: @article, status: :created, location: @article }
        else
          format.json { render json: { errors: @search.errors.full_messages }, status: :unprocessable_entity }
        end
      end
    end
  end
end
