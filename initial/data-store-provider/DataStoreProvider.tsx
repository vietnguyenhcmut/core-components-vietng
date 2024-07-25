import { createContext, useState } from "react";

type DataStoreProps = {
  dataOfUser: any;
  dataOfDevices: any[];
};

type DataStoreProviderProps = {
  children: React.ReactNode;
};

type DataStoreContextProps = {
  dataStore: DataStoreProps;
  setDataOfUser: (data_of_user: any) => void;
  setDataOfDevices: (data_of_devices: any) => void;
};

export const DataStoreContext = createContext<DataStoreContextProps>({
  dataStore: {
    dataOfUser: {},
    dataOfDevices: [],
  },
  setDataOfUser: () => {},
  setDataOfDevices: () => {},
});

const DataStoreProvider: React.FC<DataStoreProviderProps> = ({ children }) => {
  const [dataStore, setDataStore] = useState<DataStoreProps>({
    dataOfUser: {},
    dataOfDevices: [],
  });

  const setDataOfUser = (data_of_user: any) => {
    setDataStore({ ...dataStore, dataOfUser: data_of_user });
  };
  const setDataOfDevices = (data_of_devices: any) => {
    setDataStore({ ...dataStore, dataOfDevices: data_of_devices });
  };

  return (
    <DataStoreContext.Provider
      value={{
        dataStore: dataStore,
        setDataOfUser: setDataOfUser,
        setDataOfDevices: setDataOfDevices,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStoreProvider;
