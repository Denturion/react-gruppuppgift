import { useState } from "react";
import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem } from "./stylecomponens/dropdown";

interface ITestProps{
    guests(arg: number): void
};

export function NumberOfGuests (props:ITestProps){

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(1);
  
    const toggle = () => setIsOpen(!isOpen);
  
    function onOptionClicked(option:number) {
      setSelectedOption(option);
      setIsOpen(false);
      props.guests(option);
    };

    return(
        <>
        <h1>Välj antal personer</h1>
        <DropDownContainer>
        <DropDownHeader onClick={toggle}>
          {selectedOption}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={() => {onOptionClicked(option)}} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      </>
        );
}