Rails.application.routes.draw do
  get 'page/index'
  post 'analysis/softmax', to: 'analysis#softmax'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'page#index'
end
