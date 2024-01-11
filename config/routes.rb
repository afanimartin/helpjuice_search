Rails.application.routes.draw do
  root "articles#index"

  resources :articles, param: :title

  get "searches", to: "searches#index"
  post "searches", to: "searches#create"
end
