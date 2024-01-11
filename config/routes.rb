Rails.application.routes.draw do
  root "articles#index"

  resources :articles

  post "searches", to: "searches#create"
end
