define(['TaskStorage','jquery'],function (taskStorage,$){
		//var taskStorage = getTaskStorage();
		taskStorage.addCountChanged(displayCount);
		
		function loadTasksFromStorage(){
			var allTasks = taskStorage.getAll();
			for(var i=0;i<allTasks.length;i++){
				addTaskToUi(allTasks[i]);
			}
		}

		
		function onBtnAddTaskClick(){
			var taskName = $("#txtTask").val(),
				newTask = taskStorage.addTask(taskName);

			addTaskToUi(newTask);
		}
		

		function addTaskToUi(task){
			$("<li>")
				.html(task.name)
				.attr("task-id",task.id)
				.addClass(task.isCompleted ? "completed" : "")
				.appendTo("#ulTaskList");
		}
		function init(){
			$("#btnAddTask").on("click",onBtnAddTaskClick);
			$("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
			$("#ulTaskList").on("click","li",onTaskItemClick);
			loadTasksFromStorage();
		};

		function onTaskItemClick(e){
			$(this).toggleClass("completed");
			taskStorage.toggleCompletion($(this).attr("task-id"));
		}
		

		function onBtnRemoveCompletedClick(){
			$("#ulTaskList > li.completed").each(function(index,item){
				var $this = $(item);
				var taskId = $this.attr("task-id");
				taskStorage.removeTask(taskId);
				$this.remove();
			});
		}

		function displayCount(count){
			$("#spanTaskCount").text(count);
		}

		return {
			init : init
		};
				
	});