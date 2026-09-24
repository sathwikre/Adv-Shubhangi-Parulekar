export interface CaseOutcome {
  id: string;
  name: string;
  offence: string;
  outcome: "Acquittal";
  category: "IPC" | "POCSO" | "MCOCA" | "Other";
}

export const CASE_OUTCOMES: CaseOutcome[] = [
  {
    id: "1",
    name: "State v/s Mahesh Gawade and Others",
    offence: "Section 302 IPC",
    outcome: "Acquittal",
    category: "IPC",
  },
  {
    id: "2",
    name: "State v/s Balasaheb Galphade and Others",
    offence: "Section 302 IPC",
    outcome: "Acquittal",
    category: "IPC",
  },
  {
    id: "3",
    name: "State v/s Motilal Chavan and Others",
    offence: "Section 302 IPC",
    outcome: "Acquittal",
    category: "IPC",
  },
  {
    id: "4",
    name: "State v/s Rahul Kumbare",
    offence: "Section 302 IPC",
    outcome: "Acquittal",
    category: "IPC",
  },
  {
    id: "5",
    name: "State v/s Kunal Balu Londhe",
    offence: "POCSO",
    outcome: "Acquittal",
    category: "POCSO",
  },
  {
    id: "6",
    name: "State v/s Vishal Salve",
    offence: "Section 376 IPC",
    outcome: "Acquittal",
    category: "IPC",
  },
  {
    id: "7",
    name: "State v/s Usha Dukre",
    offence: "Section 302 IPC",
    outcome: "Acquittal",
    category: "IPC",
  },
  {
    id: "8",
    name: "State v/s Jagdish Hirarugi",
    offence: "POCSO",
    outcome: "Acquittal",
    category: "POCSO",
  },
  {
    id: "9",
    name: "State v/s Deepak Amale",
    offence: "MCOCA",
    outcome: "Acquittal",
    category: "MCOCA",
  },
  {
    id: "10",
    name: "State v/s Harish Garad",
    offence: "POCSO",
    outcome: "Acquittal",
    category: "POCSO",
  },
];
