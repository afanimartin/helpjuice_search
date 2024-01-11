class Article < ApplicationRecord
  has_many :searches, dependent: :destroy

  validates :title, presence: true

  def search_count_by_ip(ip_address)
    searches.where(ip_address: ip_address).count
  end
end
