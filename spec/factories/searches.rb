FactoryBot.define do
  factory :search do
    ip_address { '127.0.0.1' }
    query { 'new search' }
  end
end
