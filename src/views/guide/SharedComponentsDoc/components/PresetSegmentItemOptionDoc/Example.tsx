import { useState } from 'react'
import PresetSegmentItemOption from '@/components/shared/PresetSegmentItemOption'
import Segment from '@/components/ui/Segment'

import { HiOutlineCode, HiOutlineCube, HiOutlinePencil } from 'react-icons/hi'
import type { JSX } from 'react'

const roles: {
    value: string
    label: string
    icon: JSX.Element
    disabled?: boolean
}[] = [
        { value: 'softwareEngineer', label: 'توسعه‌دهنده', icon: <HiOutlineCode /> },
        { value: 'productManager', label: 'مدیر', icon: <HiOutlineCube /> },
        { value: 'designer', label: 'طراح', icon: <HiOutlinePencil /> },
    ]

const Example = () => {
    const [value, setValue] = useState<string[]>([roles[0].value])

    const handleChange = (val: string[]) => {
        console.log('val', val)
        setValue(val)
    }

    return (
        <Segment
            value={value}
            className="bg-transparent dark:bg-transparent"
            onChange={(val) => handleChange(val as string[])}
        >
            <div className="flex flex-col xl:flex-row items-center gap-4">
                {roles.map((item) => (
                    <Segment.Item
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                    >
                        {({ active, onSegmentItemClick, disabled }) => {
                            return (
                                <PresetSegmentItemOption
                                    hoverable
                                    active={active}
                                    disabled={disabled}
                                    className="bg-white dark:bg-gray-800 w-[212px]"
                                    onSegmentItemClick={onSegmentItemClick}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">
                                            {item.icon}
                                        </span>
                                        <h6>{item.label}</h6>
                                    </div>
                                </PresetSegmentItemOption>
                            )
                        }}
                    </Segment.Item>
                ))}
            </div>
        </Segment>
    )
}

export default Example
