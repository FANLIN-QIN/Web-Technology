package com.example.hw91;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.RecyclerView;

public class ItemMoveCallback  extends ItemTouchHelper.Callback{
    private final ItemTouchHelperContract adapter;

    public ItemMoveCallback(ItemTouchHelperContract adapter) { this.adapter = adapter; }

    @Override
    public boolean isLongPressDragEnabled() { return true; }

    @Override
    public boolean isItemViewSwipeEnabled() { return false; }

    @Override
    public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int i) {}

    @Override
    public int getMovementFlags(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder) {
        int dragFlags = ItemTouchHelper.UP | ItemTouchHelper.DOWN | ItemTouchHelper.START | ItemTouchHelper.END;
        return makeMovementFlags(dragFlags, 0);
    }

    @Override
    public boolean onMove(@NonNull RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder target) {
        adapter.onItemMoved(viewHolder.getAdapterPosition(), target.getAdapterPosition());
        return true;
    }

    @Override
    public void onSelectedChanged(RecyclerView.ViewHolder viewHolder, int actionState) {
        if (actionState != ItemTouchHelper.ACTION_STATE_IDLE) {
            if (viewHolder instanceof watchAdapter.MyView) {
                watchAdapter.MyView myViewHolder = (watchAdapter.MyView) viewHolder;
                adapter.onItemSelected(myViewHolder);
            }
        }
        super.onSelectedChanged(viewHolder, actionState);
    }

    @Override
    public void clearView(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder) {
        super.clearView(recyclerView, viewHolder);
        if (viewHolder instanceof watchAdapter.MyView) {
            watchAdapter.MyView myViewHolder = (watchAdapter.MyView) viewHolder;
            adapter.onItemClear(myViewHolder);
        }
    }

    public interface ItemTouchHelperContract {
        void onItemMoved(int fromPosition, int toPosition);
        void onItemSelected(watchAdapter.MyView myViewHolder);
        void onItemClear(watchAdapter.MyView myViewHolder);
    }

}
