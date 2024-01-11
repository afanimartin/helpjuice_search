Rails.application.routes.draw do
  root "articles#index"

  resources :articles

  get "articles/new", to: "articles#new"
  post "articles/new", to: "articles#create"
end
