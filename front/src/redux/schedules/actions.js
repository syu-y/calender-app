// スケジュール操作用
export const SCHEDULES_ADD_ITEM = 'SCHEDULES_ADD_ITEM';
export const SCHEDULES_FETCH_ITEM = 'SCHEDULES_FETCH_ITEM';
export const SCHEDULES_SET_LOADING = 'SCHEDULES_SET_LOADING';
export const SCHEDULES_DELETE_ITEM = 'SCHEDULES_DELETE_ITEM';
// エラーハンドリング用
export const SCHEDULES_ASYNC_FAILURE = 'SCHEDULES_ASYNC_FAILURE';
export const SCHEDULES_RESET_ERROR = 'SCHEDULES_RESET_ERROR';

// スケジュール追加
export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  payload,
});

// スケジュール取得
export const schedulesFetchItem = (payload) => ({
  type: SCHEDULES_FETCH_ITEM,
  payload,
});

// スケジュールロード中
export const schedulesSetLoading = () => ({
  type: SCHEDULES_SET_LOADING,
});

// スケジュール削除
export const schedulesDeleteItem = (payload) => ({
  type: SCHEDULES_DELETE_ITEM,
  payload,
});

/**
 * エラーハンドリング
 */
// スケジュール操作失敗
export const schedulesAsyncFailure = (error) => ({
  type: SCHEDULES_ASYNC_FAILURE,
  error,
});

// エラーリセット
export const schedulesResetError = (error) => ({
  type: SCHEDULES_RESET_ERROR,
});
