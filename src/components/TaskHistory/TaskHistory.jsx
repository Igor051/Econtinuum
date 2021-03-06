import React, { useEffect } from "react";
import "./task-history.styles.scss";

import TaskHistoryList from "../TaskHistoryList/TaskHistoryList";
import { connect } from "react-redux";
import { requestLoadTasks } from "../../redux/tasksHistory/tasksHistory.actions";

const TaskHistory = ({
  loadTasks,
  isLoading,
  categoryFilter,
  statusFilter,
}) => {
  useEffect(() => {
    loadTasks(categoryFilter, statusFilter);
  }, [categoryFilter, statusFilter]);

  return (
    <div className="task-history" id="task-history">
      <h1>Task history</h1>
      <div className="task-table">
        <div className="table-header">
          <p className="table-header-id">ID</p>
          <p className="table-header-points">Points</p>
          <p className="table-header-status">Status</p>
          <p className="table-header-category">Category</p>
        </div>
        <TaskHistoryList isLoading={isLoading} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadTasks: (categoryFilter, statusFilter) =>
    dispatch(requestLoadTasks(categoryFilter, statusFilter)),
});
const mapStateToProps = (state) => ({
  isLoading: state.tasksHistory.isFetching,
  categoryFilter: state.filter.category,
  statusFilter: state.filter.status,
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskHistory);
