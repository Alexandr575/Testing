class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
    	t.string  :task_id
    	t.text 	  :text
    	t.boolean :isCompleted, default: false
      t.timestamps
    end
  end
end
