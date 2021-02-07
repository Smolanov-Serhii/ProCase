<?php
class ControllerExtensionModuleAnnounce extends Controller {

    public function index() {
        // Загружаем "модель" модуля
        $this->load->language('extension/module/announce');
        $this->document->setTitle($this->language->get('heading_title'));
//        $this->load->model('block/announce');
        $data = ['t' => 'id'];
        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');
        $this->response->setOutput($this->load->view('extension/module/announce', $data));

        $this->load->model('setting/setting');


        if (($this->request->server['REQUEST_METHOD'] == 'POST')) {
            $this->model_setting_setting->editSetting('module_block_announce', $this->request->post);

            $this->session->data['success'] = $this->language->get('text_success');

            $this->response->redirect($this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module', true));
        }

        return;

        // Сохранение настроек модуля, когда пользователь нажал "Записать"
        if (($this->request->server['REQUEST_METHOD'] == 'POST')) {
            // Вызываем метод "модели" для сохранения настроек
            $this->model_extension_module_example->SaveSettings();
            // Выходим из настроек с выводом сообщения
            $this->session->data['success'] = 'Настройки сохранены';
            $this->response->redirect($this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module', true));
        }

        // Загружаем настройки через метод "модели"
        $data = array();
        $data['module_example_status'] = $this->model_extension_module_example->LoadSettings();
        // Загружаем языковой файл
        $data += $this->load->language('extension/module/example');
        // Загружаем "хлебные крошки"
        $data += $this->GetBreadCrumbs();

        // Кнопки действий
        $data['action'] = $this->url->link('extension/module/example', 'user_token=' . $this->session->data['user_token'], true);
        $data['cancel'] = $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module', true);
        // Загрузка шаблонов для шапки, колонки слева и футера
        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');

        // Выводим в браузер шаблон
        $this->response->setOutput($this->load->view('extension/module/example', $data));

    }

    // Хлебные крошки
    private function GetBreadCrumbs() {
        $data = array(); $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/dashboard', 'user_token=' . $this->session->data['user_token'], true)
        );
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_extension'),
            'href' => $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module', true)
        );
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('heading_title'),
            'href' => $this->url->link('extension/module/example', 'user_token=' . $this->session->data['user_token'], true)
        );
        return $data;
    }

}