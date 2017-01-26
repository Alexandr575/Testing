class Task < ApplicationRecord
	validates :id, uniqueness: true
	has_many :todos
end
