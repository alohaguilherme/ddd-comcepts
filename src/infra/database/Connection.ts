export default interface Connection {
  query(smtm: string, params: any): Promise<any>;
  close(): Promise<void>;
}