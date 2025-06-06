import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'

const Basic = () => {
    const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <div>
            <Button variant="solid" onClick={() => openDialog()}>
                باز کردن دیالوگ
            </Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h5 className="mb-4">عنوان دیالوگ</h5>
                <p>
                    انواع مختلفی از متون Lorem Ipsum وجود دارد، اما اکثریت آنها در
                    برخی اشکال دچار تغییراتی شده‌اند، مانند افزودن شوخی یا کلمات تصادفی که حتی
                    به طور کمی هم قابل باور نیستند.
                </p>
                <div className="text-right mt-6">
                    <Button
                        className="ltr:mr-2 rtl:ml-2"
                        variant="plain"
                        onClick={onDialogClose}
                    >
                        لغو
                    </Button>
                    <Button variant="solid" onClick={onDialogOk}>
                        تأیید
                    </Button>
                </div>
            </Dialog>
        </div>
    )
}

export default Basic
