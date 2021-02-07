<?php
class ModelBlockAnnounce extends Model {
    public function now() {
        $sqlCmd = "
            SELECT
            NOW();
        ";
        $query = $this->db->query($sqlCmd);

        $data = array();
        foreach ($query->rows as $result) {
            $data[] = $result;
        }

        return $data;
    }

    public function SaveSettings() {
        die;
    }
}
