Rails.application.routes.draw do
  root "articles#index"

  resources :articles
  post "articles/new", to: "articles#create"
end
