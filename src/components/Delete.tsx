import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import LoadButton from "@/components/LoadButton";

export default function Delete({
  open,
  setOpen,
  record,
  handleSubmit,
  loading,
}) {
  function handleOpenChange(e) {
    setOpen(e);
  }
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this data
            from our records.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <LoadButton type="submit" onClick={handleSubmit} loading={loading}>
            Confirm
          </LoadButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
