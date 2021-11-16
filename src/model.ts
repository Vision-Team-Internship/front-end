export interface Floor {
  _id?: string;
  name: string;
  manager_id: string;
}
export interface Department {
  _id?: number;
  name: string;
  floor_id: string;
}
export interface Room {
  _id?: number;
  name: string;
  department_id: string;
}
export interface Message {
  title: string;
  message: string;
  feedbackLevel: string;
  feedbackType: string;
  uniqueIDs: string;
}

export interface MSG {
  id?: number;
  title: string;
  msg: string;
  status: string;
  room_id: string;
  department_id: string;
  floor_id: string;
}
