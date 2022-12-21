import React, { MouseEventHandler } from 'react';

interface LeftPaneMenuItemProps {
    label: string;
    isSelected: boolean;
    sectionClass: string;
}
const LeftPaneItem = ({ label, isSelected, sectionClass }: LeftPaneMenuItemProps) => {
    const scrollIntoSectionView = (): void => {
        const element = document.getElementsByClassName(`${sectionClass}`);
        if (element[0]) {
            element[0].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    };
    return (
        <li
            className={`grey3 ${isSelected && 'bold'}`}
            onClick={scrollIntoSectionView as unknown as MouseEventHandler<HTMLLIElement>}
        >
            {label}
        </li>
    );
};

export default LeftPaneItem;
