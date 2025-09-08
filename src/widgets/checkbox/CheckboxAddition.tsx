import { Checkbox, CheckboxGroup, Fieldset, For } from '@chakra-ui/react';
import { useState } from 'react';

import { IAddition } from 'entities/entities.ts';

interface ICheckboxAddition {
    items: IAddition[];
    onSelectionChange?: (selectedIds: string[]) => void;
    textLegend: string;
}

export const CheckboxAddition = ({ items, onSelectionChange, textLegend }: ICheckboxAddition) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelectionChange = (values: string[]) => {
        setSelectedItems(values);
        if (onSelectionChange) {
            onSelectionChange(values);
        }
    };

    return (
        <Fieldset.Root>
            <CheckboxGroup
                name='checkBoxAddition'
                value={selectedItems}
                onValueChange={handleSelectionChange}
            >
                <Fieldset.Legend fontSize='sm' mb='2'>
                    {textLegend}
                </Fieldset.Legend>
                <Fieldset.Content>
                    <For each={items}>
                        {(value) => (
                            <Checkbox.Root key={value.id} value={String(value.id)}>
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                                <Checkbox.Label>
                                    {`${value.name} (${value.price} руб.)`}
                                </Checkbox.Label>
                            </Checkbox.Root>
                        )}
                    </For>
                </Fieldset.Content>
            </CheckboxGroup>
        </Fieldset.Root>
    );
};
