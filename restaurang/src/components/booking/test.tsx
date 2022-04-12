import { useState } from "react";
import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem } from "./mockups/stylecomponens/dropdown";

export function TestComponent (){

    const options = [1, 2, 3, 4, 5, 6];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(1);
  
    const toggle = () => setIsOpen(!isOpen);
  
    function onOptionClicked(option:number) {
      setSelectedOption(option);
      setIsOpen(false);
    };

    return(
        <>
        <h1>Välj antal personer</h1>
        <DropDownContainer>
        <DropDownHeader onClick={toggle}>
          {selectedOption || 1}
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