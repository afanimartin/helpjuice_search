class Search < ApplicationRecord
  belongs_to :article

  validates :ip_address, presence: true
  validates :query, presence: true
end
